class NewItemBtn {
  /**
   * Constructor
   * Put your required dependencies in the constructor parameters list
   */
  constructor() {
  }
  
  /**
   * Initialize the component
   * This method is triggered before rendering the component
   */
  init() {}
  
  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {
    this.label = this.inputs.getProp("label");
    this.icon = this.inputs.getProp("icon");
    this.link = this.inputs.getProp("link");
    this.color = this.inputs.getProp("color");
  }
}
