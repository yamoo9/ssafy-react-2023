// --------------------------------------------------------------------------
// ES Modules

function shuffle<T>(list: T[]): T[] {
  let _: T[] = [...list];
  for (let i = _.length - 1; i > 0; --i) {
    let k: number = Math.floor(Math.random() * (i + 1));
    [_[k], _[i]] = [_[i], _[k]];
  }
  return _;
}

function numberWithComma(n: number): string {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// --------------------------------------------------------------------------

type VirtualNode = null | string | number | VirtualElement;

interface Props {
  [key: string]: any;
  children?: (string | VirtualElement)[];
}

interface VirtualElement {
  $$typeof: Symbol;
  key: null | string | number;
  type: string;
  props: Props | null;
}

type createElementType = (type: string, props: Props) => VirtualElement;

const createElement: createElementType = (
  type: string,
  props: Props,
  ...children
) => {
  const returnNode: VirtualElement = {
    $$typeof: Symbol('virtual-element'),
    type,
    key: props?.key ?? null,
    props: { ...props, children: [...(props?.children ?? []), ...children] },
  };

  return returnNode;
};

class VirtualDomRoot {
  constructor(private rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  #parseVNode(vNode: string | VirtualElement): string | HTMLElement {
    if (typeof vNode === 'string') return vNode;

    const { type, props } = vNode;
    const element = document.createElement(type);
    const children = props?.children;
    delete props?.children;

    props &&
      Object.entries(props).forEach(([key, value]) => {
        if (key === 'className') {
          element.classList.add(value);
        } else {
          element.setAttribute(key, value);
        }
      });

    children?.forEach((child) => {
      if (typeof child === 'string') {
        element.append(child);
      } else {
        element.append(this.#parseVNode(child));
      }
    });

    return element;
  }

  render(vNode: VirtualElement): void {
    const parsedElements = this.#parseVNode(vNode);
    this.rootElement.append(parsedElements);
  }

  umount(): void {
    Array.from(this.rootElement.children).forEach((child: Element) =>
      child.remove()
    );
  }
}

function createRoot(rootElement: HTMLElement): VirtualDomRoot {
  return new VirtualDomRoot(rootElement);
}
