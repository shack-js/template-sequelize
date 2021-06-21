import { initSequelize, Todo } from '../common/sequlize.mjs'

export const list = async () => {
  await initSequelize
  return Todo.findAll({ raw: true })
}

export const toggle = async (id = 0, checked = false) => {
  await Todo.update({ checked }, { where: { id } })
  await delay(1000)
}

export const add = async (text = '') => {
  await Todo.build({ text, checked: false }).save()
}

export const remove = async (id = 0) => {
  await Todo.destroy({ where: { id } })
}

function delay(mili) {
  return new Promise(resolve => setTimeout(resolve, mili))
}