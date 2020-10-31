import {cleanup, render} from '@testing-library/svelte'
import Component from '../src/Component.svelte'

describe('Component', () => {
	afterEach(cleanup)

	test('should match snapshot', () => {
		const {container} = render(Component)
		expect(container).toMatchSnapshot()
	})
})
