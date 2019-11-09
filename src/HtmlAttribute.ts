import { VirtualNode } from './VirtualNode'

export class HtmlAttribute extends VirtualNode {
  constructor(public name: string, public value: string) {
    super()
  }

  get html(): string {
    return `${this.name}="${this.value}"`
  }
}
