import { Texture, TextureFilter, TextureRepeat } from '@thi.ng/webgl';
import { action, makeObservable, observable } from 'mobx';

import { randomHash } from '../../utils/random/random';
import { WebGLContext } from '../WebGLContext/WebGLContext';
import { ITextureManagerProps, TextureResolver } from './TextureManager.types';

export class TextureManager {
    /** WebGL Context */
    public context: WebGLContext;
    /** Textures */
    public textures: Map<string, Texture>;
    /** Texture Resolver */
    public textureResolver: TextureResolver;

    constructor(context: WebGLContext, props: ITextureManagerProps) {
        this.context = context;
        this.textures = new Map();
        this.textureResolver = props.textureResolver;

        makeObservable(this, {
            textures: observable,
            create: action,
            update: action
        });
    }

    /** Creates a new Texture */
    public create(): [string, Texture] {
        const id = randomHash(8);

        const texture = new Texture(this.context.ctx, undefined, {
            image: new Image(),
            flip: true,
            filter: TextureFilter.LINEAR,
            wrap: TextureRepeat.CLAMP
        });

        this.textures.set(id, texture);
        this.context.reset();

        return [id, texture];
    }

    /** Update a Texture */
    public async update(id: string, textureSource: TexImageSource) {
        const texture = this.textures.get(id);

        if (texture) {
            texture.configure({
                image: textureSource,
                flip: true,
                filter: TextureFilter.LINEAR,
                wrap: TextureRepeat.CLAMP
            });
        }
    }
}
