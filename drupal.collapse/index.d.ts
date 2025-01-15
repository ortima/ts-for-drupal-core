import type { PrototypeFuncs } from 'drupal';

declare global {
  namespace Drupal {
    type DetailsSummarizedContent = {
      $node: JQuery<HTMLDetailsElement>,
      setupSummary(): void,
      $detailsSummarizedContentWrapper: JQuery<HTMLElement>,
      onSummaryUpdated(): void,
    }

    interface DetailsSummarizedContentConstructor {
      new (node: HTMLDetailsElement): DetailsSummarizedContent,
      prototype: PrototypeFuncs<DetailsSummarizedContent>,
    }

    let DetailsSummarizedContent: DetailsSummarizedContentConstructor & {
      instances: Array<DetailsSummarizedContent>
    }
    
    namespace theme {
      function detailsSummarizedContentWrapper(): string
      function detailsSummarizedContentText(text: string|null): string
    }
  }
}
