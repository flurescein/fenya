import { HtmlAttribute } from './HtmlAttribute'
import { VirtualNode } from './VirtualNode'

export abstract class HtmlElement extends VirtualNode {
  constructor(public tag: string, public attributes: HtmlAttribute[]) {
    super()
  }
}
