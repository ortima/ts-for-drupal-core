declare global {
  namespace Drupal {
    interface behaviorAdditionalPropsMap {
      drupalDisplace: {
        displaceProcessed?: true,
      },
    }

    var displace: {
      (broadcast?: boolean): displaceOffset,
      readonly offsets: displaceOffset,
      calculateOffset: <E extends keyof displaceOffset>(edge: E) => displaceOffset[E],
    }
  }
}

export type displaceOffset = {
  top: number,
  right: number,
  bottom: number,
  left: number,
}
