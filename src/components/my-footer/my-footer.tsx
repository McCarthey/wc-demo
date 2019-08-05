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

  @Prop() linkArray?: string;

  @State() links: LinkItem[] | any;

  componentWillLoad() {
    this.linkArray
      ? (this.links = JSON.parse(this.linkArray))
      : (this.links = []);
  }

  private getCurrentYear(): number {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div>
        <div class="foot-link-wrap">
          {this.links.length
            ? this.links.map(link => (
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
