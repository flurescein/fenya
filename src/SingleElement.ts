import { HtmlElement } from './HtmlElement'
import { HtmlAttribute } from './HtmlAttribute'

export class SingleElement extends HtmlElement {
  constructor(tag: string, attributes: HtmlAttribute[]) {
    super(tag, attributes)
  }
}
