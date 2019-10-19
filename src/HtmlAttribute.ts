import { VirtualNode } from './VirtualNode'

export class HtmlAttribute extends VirtualNode {
  constructor(public name: string, public value: string) {
    super()
  }
}
