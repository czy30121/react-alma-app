import { MixNode } from './nodes/common/MixNode/MixNode';
import { TimeNode } from './nodes/common/TimeNode/TimeNode';
import { UVNode } from './nodes/common/UVNode/UVNode';
import { WebGLContextNode } from './nodes/common/WebGLContextNode/WebGLContextNode';
import { CreationEffectNode } from './nodes/effects/CreationEffectNode/CreationEffectNode';
import { ExponentiationNode } from './nodes/exponential/ExponentiationNode/ExponentiationNode';
import { InverseSquareRootNode } from './nodes/exponential/InverseSquareRootNode/InverseSquareRootNode';
import { LogarithmNode } from './nodes/exponential/LogarithmNode/LogarithmNode';
import { PowerNode } from './nodes/exponential/PowerNode/PowerNode';
import { SquareRootNode } from './nodes/exponential/SquareRootNode/SquareRootNode';
import { GLSLNode } from './nodes/glsl/GLSLNode/GLSLNode';
import { AbsoluteNode } from './nodes/math/AbsoluteNode/AbsoluteNode';
import { AdditionNode } from './nodes/math/AdditionNode/AdditionNode';
import { CeilNode } from './nodes/math/CeilNode/CeilNode';
import { DivisionNode } from './nodes/math/DivisionNode/DivisionNode';
import { FloorNode } from './nodes/math/FloorNode/FloorNode';
import { FractionalNode } from './nodes/math/FractionalNode/FractionalNode';
import { MaximumNode } from './nodes/math/MaximumNode/MaximumNode';
import { MinimumNode } from './nodes/math/MinimumNode/MinimumNode';
import { ModuloNode } from './nodes/math/ModuloNode/ModuloNode';
import { MultiplicationNode } from './nodes/math/MultiplicationNode/MultiplicationNode';
import { SignNode } from './nodes/math/SignNode/SignNode';
import { SubtractionNode } from './nodes/math/SubtractionNode/SubtractionNode';
import { SimplexNoiseNode } from './nodes/noise/SimplexNoiseNode/SimplexNoiseNode';
import { CameraNode } from './nodes/textures/CameraNode/CameraNode';
import { TextureNode } from './nodes/textures/TextureNode/TextureNode';
import { ArccosineNode } from './nodes/trigonometry/ArccosineNode/ArccosineNode';
import { ArcsineNode } from './nodes/trigonometry/ArcsineNode/ArcsineNode';
import { ArctangentNode } from './nodes/trigonometry/ArctangentNode/ArctangentNode';
import { CosineNode } from './nodes/trigonometry/CosineNode/CosineNode';
import { SineNode } from './nodes/trigonometry/SineNode/SineNode';
import { TangentNode } from './nodes/trigonometry/TangentNode/TangentNode';
import { SwizzleNode } from './nodes/utils/SwizzleNode/SwizzleNode';
import { DistanceNode } from './nodes/vectors/DistanceNode/DistanceNode';
import { LengthNode } from './nodes/vectors/LengthNode/LengthNode';
import { NormalizeNode } from './nodes/vectors/NormalizeNode/NormalizeNode';
import { Vector2Node } from './nodes/vectors/Vector2Node/Vector2Node';
import { Vector3Node } from './nodes/vectors/Vector3Node/Vector3Node';
import { Vector4Node } from './nodes/vectors/Vector4Node/Vector4Node';
import { IWebGLNodeCollection, WebGLNodeType } from './types';

export const nodes: IWebGLNodeCollection = {
    [WebGLNodeType.WEBGL_CONTEXT]: WebGLContextNode,
    [WebGLNodeType.SIMPLEX_NOISE]: SimplexNoiseNode,
    [WebGLNodeType.CAMERA]: CameraNode,
    [WebGLNodeType.SINE]: SineNode,
    [WebGLNodeType.ARCSINE]: ArcsineNode,
    [WebGLNodeType.COSINE]: CosineNode,
    [WebGLNodeType.ARCCOSINE]: ArccosineNode,
    [WebGLNodeType.ADDITION]: AdditionNode,
    [WebGLNodeType.SUBTRACTION]: SubtractionNode,
    [WebGLNodeType.MULTIPLICATION]: MultiplicationNode,
    [WebGLNodeType.DIVISION]: DivisionNode,
    [WebGLNodeType.FRACTIONAL]: FractionalNode,
    [WebGLNodeType.MINIMUM]: MinimumNode,
    [WebGLNodeType.MAXIMUM]: MaximumNode,
    [WebGLNodeType.ABSOLUTE]: AbsoluteNode,
    [WebGLNodeType.SIGN]: SignNode,
    [WebGLNodeType.FLOOR]: FloorNode,
    [WebGLNodeType.CEIL]: CeilNode,
    [WebGLNodeType.LENGTH]: LengthNode,
    [WebGLNodeType.DISTANCE]: DistanceNode,
    [WebGLNodeType.NORMALIZE]: NormalizeNode,
    [WebGLNodeType.TANGENT]: TangentNode,
    [WebGLNodeType.ARCTANGENT]: ArctangentNode,
    [WebGLNodeType.POWER]: PowerNode,
    [WebGLNodeType.SQUARE_ROOT]: SquareRootNode,
    [WebGLNodeType.INVERSE_SQUARE_ROOT]: InverseSquareRootNode,
    [WebGLNodeType.EXPONENTIATION]: ExponentiationNode,
    [WebGLNodeType.LOGARITHM]: LogarithmNode,
    [WebGLNodeType.GLSL]: GLSLNode,
    [WebGLNodeType.MODULO]: ModuloNode,
    [WebGLNodeType.TEXTURE]: TextureNode,
    [WebGLNodeType.TIME]: TimeNode,
    [WebGLNodeType.SWIZZLE]: SwizzleNode,
    [WebGLNodeType.MIX]: MixNode,
    [WebGLNodeType.UV]: UVNode,
    [WebGLNodeType.VECTOR_2]: Vector2Node,
    [WebGLNodeType.VECTOR_3]: Vector3Node,
    [WebGLNodeType.VECTOR_4]: Vector4Node,

    // Effects
    [WebGLNodeType.CREATION_EFFECT]: CreationEffectNode
};

/** Types */
export * from './types';

/** Models */
export * from './models/WebGLContext/WebGLContext';
export * from './models/WebGLContext/WebGLContext.types';
export * from './models/CameraManager/CameraManager';
export * from './models/CameraManager/CameraManager.types';

/** Common Nodes */
export * from './nodes/math/ModuloNode/ModuloNode';
export * from './nodes/math/ModuloNode/ModuloNode.types';
export * from './nodes/common/MixNode/MixNode';
export * from './nodes/common/MixNode/MixNode.types';
export * from './nodes/math/FractionalNode/FractionalNode';
export * from './nodes/math/FractionalNode/FractionalNode.types';
export * from './nodes/math/MinimumNode/MinimumNode';
export * from './nodes/math/MinimumNode/MinimumNode.types';
export * from './nodes/math/MaximumNode/MaximumNode';
export * from './nodes/math/MaximumNode/MaximumNode.types';
export * from './nodes/math/AbsoluteNode/AbsoluteNode';
export * from './nodes/math/AbsoluteNode/AbsoluteNode.types';
export * from './nodes/math/SignNode/SignNode';
export * from './nodes/math/SignNode/SignNode.types';
export * from './nodes/math/FloorNode/FloorNode';
export * from './nodes/math/FloorNode/FloorNode.types';
export * from './nodes/math/CeilNode/CeilNode';
export * from './nodes/math/CeilNode/CeilNode.types';

/** Accessor Nodes */
export * from './nodes/common/TimeNode/TimeNode';
export * from './nodes/common/TimeNode/TimeNode.types';
export * from './nodes/common/UVNode/UVNode';
export * from './nodes/common/UVNode/UVNode.types';
export * from './nodes/common/WebGLContextNode/WebGLContextNode';
export * from './nodes/common/WebGLContextNode/WebGLContextNode.types';

/** Math Nodes */
export * from './nodes/math/AdditionNode/AdditionNode';
export * from './nodes/math/AdditionNode/AdditionNode.types';
export * from './nodes/math/SubtractionNode/SubtractionNode';
export * from './nodes/math/SubtractionNode/SubtractionNode.types';
export * from './nodes/math/MultiplicationNode/MultiplicationNode';
export * from './nodes/math/MultiplicationNode/MultiplicationNode.types';
export * from './nodes/math/DivisionNode/DivisionNode';
export * from './nodes/math/DivisionNode/DivisionNode.types';

/** Trigonometry */
export * from './nodes/trigonometry/SineNode/SineNode';
export * from './nodes/trigonometry/SineNode/SineNode.types';
export * from './nodes/trigonometry/ArcsineNode/ArcsineNode';
export * from './nodes/trigonometry/ArcsineNode/ArcsineNode.types';
export * from './nodes/trigonometry/CosineNode/CosineNode';
export * from './nodes/trigonometry/CosineNode/CosineNode.types';
export * from './nodes/trigonometry/ArccosineNode/ArccosineNode';
export * from './nodes/trigonometry/ArccosineNode/ArccosineNode.types';
export * from './nodes/trigonometry/TangentNode/TangentNode';
export * from './nodes/trigonometry/TangentNode/TangentNode.types';
export * from './nodes/trigonometry/ArctangentNode/ArctangentNode';
export * from './nodes/trigonometry/ArctangentNode/ArctangentNode.types';

/** Exponential */
export * from './nodes/exponential/ExponentiationNode/ExponentiationNode';
export * from './nodes/exponential/ExponentiationNode/ExponentiationNode.types';
export * from './nodes/exponential/LogarithmNode/LogarithmNode';
export * from './nodes/exponential/LogarithmNode/LogarithmNode.types';
export * from './nodes/exponential/PowerNode/PowerNode';
export * from './nodes/exponential/PowerNode/PowerNode.types';
export * from './nodes/exponential/SquareRootNode/SquareRootNode';
export * from './nodes/exponential/SquareRootNode/SquareRootNode.types';
export * from './nodes/exponential/InverseSquareRootNode/InverseSquareRootNode';
export * from './nodes/exponential/InverseSquareRootNode/InverseSquareRootNode.types';

/** Vectors */
export * from './nodes/vectors/Vector2Node/Vector2Node';
export * from './nodes/vectors/Vector2Node/Vector2Node.types';
export * from './nodes/vectors/Vector3Node/Vector3Node';
export * from './nodes/vectors/Vector3Node/Vector3Node.types';
export * from './nodes/vectors/Vector4Node/Vector4Node';
export * from './nodes/vectors/Vector4Node/Vector4Node.types';
export * from './nodes/vectors/LengthNode/LengthNode';
export * from './nodes/vectors/LengthNode/LengthNode.types';
export * from './nodes/vectors/DistanceNode/DistanceNode';
export * from './nodes/vectors/DistanceNode/DistanceNode.types';
export * from './nodes/vectors/NormalizeNode/NormalizeNode';
export * from './nodes/vectors/NormalizeNode/NormalizeNode.types';
export * from './nodes/utils/SwizzleNode/SwizzleNode';
export * from './nodes/utils/SwizzleNode/SwizzleNode.types';

/** Textures */
export * from './nodes/textures/TextureNode/TextureNode';
export * from './nodes/textures/TextureNode/TextureNode.types';
export * from './nodes/textures/CameraNode/CameraNode';
export * from './nodes/textures/CameraNode/CameraNode.types';

/** Noise */
export * from './nodes/noise/SimplexNoiseNode/SimplexNoiseNode';
export * from './nodes/noise/SimplexNoiseNode/SimplexNoiseNode.types';

/** Effect Nodes */
export * from './nodes/glsl/GLSLNode/GLSLNode';
export * from './nodes/glsl/GLSLNode/GLSLNode.types';
export * from './nodes/effects/CreationEffectNode/CreationEffectNode';
