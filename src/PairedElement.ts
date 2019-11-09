import { HtmlElement } from './HtmlElement'
import { HtmlAttribute } from './HtmlAttribute'
import { VirtualNode } from './VirtualNode'

export class PairedElement extends HtmlElement {
  constructor(
    tag: string,
    attributes: HtmlAttribute[],
    public innerNodes: VirtualNode[]
  ) {
    super(tag, attributes)
  }

  get html(): string {
    const inner = this.innerNodes.map(node => node.html).join('')

    return `<${this.tag}${this.attributesString}>${inner}</${this.tag}>`
  }
}
