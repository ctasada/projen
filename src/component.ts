import { Construct } from "constructs";
import { Project } from "./project";

let currentId = 0;
const componentId = () => {
  return ++currentId;
};

/**
 * Represents a project component.
 */
export class Component extends Construct {
  constructor(public readonly project: Project, id?: string) {
    super(project, id || `${new.target.name}#${componentId()}`);
    this.node.addMetadata("type", "component");
    this.node.addMetadata("construct", new.target.name);
    project._addComponent(this);
  }

  /**
   * Called before synthesis.
   */
  public preSynthesize() {}

  /**
   * Synthesizes files to the project output directory.
   */
  public synthesize() {}

  /**
   * Called after synthesis. Order is *not* guaranteed.
   */
  public postSynthesize() {}
}
