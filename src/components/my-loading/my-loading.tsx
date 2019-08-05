import { Component, h } from "@stencil/core";

@Component({
  tag: "my-loading",
  styleUrl: "my-loading.css"
})
export class MyLoading {
  render() {
    return <i class="loading" />;
  }
}
