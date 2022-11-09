import { vec4 } from "@thi.ng/shader-ast";
import { defaults } from "lodash";
import { IArtboardNodeInputs, IArtboardNodeProps } from "./ArtboardNode.types";
import { INodeOutputs, NodeType } from "../../../core/Node/Node.types";
import { Node } from "../../../core/Node/Node";
import { Input } from "../../../core/Input/Input";
import { Artboard } from "../../../core/Context/Context";
import { IInputProps } from "../../../core/Input/Input.types";

export class ArtboardNode extends Node {
  type = NodeType.ARTBOARD;

  inputs: IArtboardNodeInputs;
  outputs: INodeOutputs;

  constructor(artboard: Artboard, props: IArtboardNodeProps = {}) {
    super(artboard, props);

    this.inputs = {
      color: new Input(
        this,
        defaults<Partial<IInputProps<"vec4">> | undefined, IInputProps<"vec4">>(
          props.inputs?.color,
          {
            name: "Color",
            type: "vec4",
            defaultValue: vec4(0, 0, 0, 1),
          }
        )
      ),
    };

    this.outputs = {};
  }
}