import { Port } from '../Port/Port';
import type { Node } from '../Node/Node';
import type { IInputProps } from './Input.types';

export abstract class Input<
    TValueType = unknown,
    TValue = unknown,
    TSerializedValue = unknown,
    TNode extends Node = Node
> extends Port<TValueType, TValue, TSerializedValue, IInputProps<TSerializedValue, TValueType>, TNode> {}
