import { Sym } from '@thi.ng/shader-ast';
import { UniformDecl } from '@thi.ng/webgl';
import { IContextProps } from 'alma-graph';

import { ClassConstructor, WebGLNode } from '../../types';

export interface IUniforms {
    mouse: UniformDecl;
    time: UniformDecl;
    resolution: UniformDecl;
    cameraTexture: UniformDecl;
}

export interface ICompiledUniforms {
    mouse: Sym<'vec2'>;
    time: Sym<'float'>;
    resolution: Sym<'vec2'>;
    cameraTexture: Sym<'sampler2D'>;
}

export interface DrawingSize {
    width: number;
    height: number;
}

export interface INodesCollection {
    [key: string]: ClassConstructor<WebGLNode>;
}

export interface IWebGLContextProps extends IContextProps {
    nodesCollection: INodesCollection;
    cameraTextureResolver: () => Promise<WebGLTexture>;
    onFrameEnd?: () => void;
}
