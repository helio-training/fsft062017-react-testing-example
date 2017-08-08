import React from 'react'
import { shallow } from 'enzyme'

import PersonList from './PersonList'

test(`when the people array is empty, it should render 'There are no Users'`, () => {
  const instance = shallow(<PersonList users={[]} />)
  const text = instance.find('div').text()
  expect(text).toEqual('There are no Users')
})

test(`when the people array is not empty, it should render the users`, () => {
  const instance = shallow(<PersonList users={[
    { name: 'Tyler' },
    { name: 'Tanner' },
    { name: 'Kyle' },
  ]} />)

  const li = instance.find('li')
  expect(li.length).toEqual(3)

  expect(li.get(0).key).toEqual('Tyler')
  expect(li.get(2).key).toEqual('Kyle')
})

