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
  init() {
    this.label = this.prop("label");
    this.icon = this.prop("icon");
    this.link = this.prop("link");
    this.color = this.prop("color");
  }
  
  /**
   * The component is ready to do any action after being rendered in dom
   */
  ready() {
  }
}
