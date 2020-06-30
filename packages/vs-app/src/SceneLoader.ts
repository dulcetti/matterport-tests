import scene from '../assets/vs-app.json';
import { ISceneNode } from '@mp/common';

export class SceneLoader {
  private nodes: ISceneNode[] = [];

  constructor(private sdk: any) {}

  public async load(sid: string, callback: (node: ISceneNode) => void = null) {
    const nodesToStop = this.nodes.splice(0);
    for (const node of nodesToStop) {
      node.stop();
    }

    const scene = sidToScene.get(sid);
    if (!scene) {
      return;
    }

    const nodesToStart: ISceneNode[] = await this.sdk.Scene.deserialize(JSON.stringify(scene));

    if (callback) {
      for (const node of nodesToStart) {
        callback(node);
      }
    }

    for (const node of nodesToStart) {
      node.start();
      this.nodes.push(node);
    }
  }

  public *nodeIterator(): IterableIterator<ISceneNode> {
    for (const node of this.nodes) {
      yield node;
    }
  }
}

const sidToScene: Map<string, any> = new Map();

sidToScene.set('2dsQsoWwAEK', scene);
// AAWs9eZ9ip6
