import Node from '../core/Node.js';
import FogNode from './FogNode.js';
import { Swizzable } from '../shadernode/ShaderNode.js';

export default class FogExp2Node extends FogNode {
    isFogExp2Node: true;
    densityNode: Node;

    constructor(colorNode: Node, densityNode: Node);
}

export const densityFog: (colorNode: Node, densityNode: Node) => Swizzable<FogExp2Node>;
