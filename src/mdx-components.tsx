import type { MDXComponents } from 'mdx/types'
import { H1, H2, H3, P } from './app/components/mdx-global'

export function useMDXComponents(): MDXComponents {
    return {
        h1: H1,
        h2: H2,
        h3: H3,
        p: P
    }
}