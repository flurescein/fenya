import { HtmlAttribute } from './HtmlAttribute'
import { VirtualNode } from './VirtualNode'

export abstract class HtmlElement extends VirtualNode {
  constructor(public tag: string, public attributes: HtmlAttribute[]) {
    super()
  }

  get attributesString(): string {
    const attrs = this.attributes.map(attribute => attribute.html).join(' ')

    return attrs !== '' ? ` ${attrs}` : ''
  }
}
