import { getters } from './index'

describe('todos getters', () => {

  it('should handle "all" with getFilter', () => {
    const rootState = {
      route: {
        params: {
          filter: "all"
        }
      }
    }
    expect(getters.getFilter(null, null, rootState))
      .to.equal('all')
  })

})
