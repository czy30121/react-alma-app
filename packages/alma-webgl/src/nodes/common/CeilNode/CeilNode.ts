import { ceil, float, Prim } from '@thi.ng/shader-ast';
import { Input, IInputProps, Output, IOutputProps } from 'alma-graph';
import { defaults, defaultsDeep } from 'lodash';

import { PolymorphicNode } from '../../../models/PolymorphicNode/PolymorphicNode';
import { WebGLContext } from '../../../models/WebGLContext/WebGLContext';
import { WebGLNodeType } from '../../../types';
import { ICeilNodeInputs, ICeilNodeOutputs, ICeilNodeProps } from './CeilNode.types';

export class CeilNode extends PolymorphicNode {
    static icon = 'vertical_align_top';
    static description = 'Returns a value equal to the nearest integer that is greater than or equal to input.';

    static nodeName = 'Ceil';
    type = WebGLNodeType.CEIL;

    inputs: ICeilNodeInputs;
    outputs: ICeilNodeOutputs;

    constructor(context: WebGLContext, props: ICeilNodeProps = {}) {
        defaultsDeep(props, {
            data: {
                type: {
                    selected: 'float',
                    options: ['float', 'vec2', 'vec3', 'vec4']
                }
            }
        });

        super(context, props);

        this.inputs = {
            input: new Input(
                this,
                defaults<Partial<IInputProps<Prim>> | undefined, IInputProps<Prim>>(props.inputs?.input, {
                    name: 'Input',
                    type: 'float',
                    defaultValue: float(0)
                })
            )
        };

        this.outputs = {
            output: new Output(
                this,
                defaults<Partial<IOutputProps<Prim>> | undefined, IOutputProps<Prim>>(props.outputs?.output, {
                    name: 'Output',
                    type: 'float',
                    value: () => {
                        return ceil(this.resolveValue(this.inputs.input.value));
                    }
                })
            )
        };
    }
}
