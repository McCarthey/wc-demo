import { Component, Prop, State, h } from "@stencil/core";

export interface LinkItem {
  name: string;
  url: string;
}

@Component({
  tag: "my-footer",
  styleUrl: "my-footer.css"
})
export class MyFooter {
  @Prop() name: string;

  @Prop() date: string;

  @Prop() linkArray?: LinkItem[] | any;

  @Prop() backgroundColor?: string;

  @State() links: any;

  componentWillLoad() {
  }

  private getCurrentYear(): number {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div style={{ backgroundColor: this.backgroundColor }}>
        <div class="foot-link-wrap">
          {this.linkArray.length
            ? this.linkArray.map(link => (
                <a href={link.url} class="foot-link">
                  {link.name}
                </a>
              ))
            : ""}
        </div>
        <p class="copyright">
          Copyright © {this.date ? this.date : this.getCurrentYear()}{" "}
          {this.name}
        </p>
      </div>
    );
  }
}
