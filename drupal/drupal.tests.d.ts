declare global {
  namespace Drupal {

    interface behaviorAdditionalPropsMap {
      propstest: {
        prop1: number,
        prop2: string,
        prop3: (arg1: string, arg2: boolean) => number,
      }
    }

    namespace theme {
      let testFunc: (arg1: string, arg2: number) => HTMLElement
    }
  }
}

export type {}
