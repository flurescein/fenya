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
}
