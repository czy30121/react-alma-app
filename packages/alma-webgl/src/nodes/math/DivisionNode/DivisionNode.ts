import { div, float } from '@thi.ng/shader-ast';
import { Input, IInputProps, Node, Output, IOutputProps } from 'alma-graph';
import { defaults } from 'lodash';

import { WebGLContext } from '../../../models/WebGLContext/WebGLContext';
import { WebGLNodeType } from '../../../types';
import { IDivisionNodeInputs, IDivisionNodeOutputs, IDivisionNodeProps } from './DivisionNode.types';

export class DivisionNode extends Node {
    static icon = 'show_chart';
    static description = 'Performs division on the inputs.';

    name = 'Division';
    type = WebGLNodeType.DIVISION;

    inputs: IDivisionNodeInputs;
    outputs: IDivisionNodeOutputs;

    constructor(context: WebGLContext, props: IDivisionNodeProps = {}) {
        super(context, props);

        this.inputs = {
            a: new Input(
                this,
                defaults<Partial<IInputProps<'float'>> | undefined, IInputProps<'float'>>(props.inputs?.a, {
                    name: 'A',
                    type: 'float',
                    defaultValue: float(0)
                })
            ),
            b: new Input(
                this,
                defaults<Partial<IInputProps<'float'>> | undefined, IInputProps<'float'>>(props.inputs?.b, {
                    name: 'B',
                    type: 'float',
                    defaultValue: float(0)
                })
            )
        };

        this.outputs = {
            result: new Output(
                this,
                defaults<Partial<IOutputProps<'float'>> | undefined, IOutputProps<'float'>>(props.outputs?.result, {
                    name: 'Result',
                    type: 'float',
                    value: () => {
                        return div<'float', 'float'>(
                            this.resolveValue(this.inputs.a.value),
                            this.resolveValue(this.inputs.b.value)
                        );
                    }
                })
            )
        };
    }
}
