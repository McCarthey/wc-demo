import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-footer"
})
export class MyFooter {
  @Prop() name: string;

  @Prop() date: string

  private getCurrentYear(): number {
    return (new Date()).getFullYear()
  }

  render() {
      return (
           <div>
               <p>Copyright © {this.date ? this.date : this.getCurrentYear()} {this.name}</p>
           </div>
      );
  }
}
