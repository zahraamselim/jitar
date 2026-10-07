
import type ESBinding from './ESBinding';
import type ESStatement from './ESStatement';

export default class ESBindingElement
{
    binding: ESBinding;
    initializer: ESStatement | undefined;
    key?: string;

    constructor(binding: ESBinding, initializer: ESStatement | undefined, key?: string)
    {
        this.binding = binding;
        this.initializer = initializer;
        this.key = key;
    }

    clone(): ESBindingElement
    {
        const binding = this.binding.clone();
        const initializer = this.initializer?.clone();

        return new ESBindingElement(binding, initializer, this.key);
    }

    toString(): string
    {
        const key = this.key !== undefined ? `${this.key}:` : '';
        const binding = this.binding.toString();
        const initializer = this.initializer !== undefined ? `=${this.initializer.toString(false)}` : '';

        return `${key}${binding}${initializer}`;
    }
}
