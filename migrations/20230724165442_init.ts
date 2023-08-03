import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('public')
    .createTable('users', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid()).primary()
      table.string('user_id').notNullable()
    })
    .createTable('fridges', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid()).primary()
      table.uuid('fridge_id').notNullable()
      table.uuid('user_id').notNullable().references('id').inTable('users')
    })
    .createTable('items', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid()).primary()
      table.uuid('fridge_id').notNullable().references('id').inTable('fridges')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.string('quantity').notNullable() // for now will be just string
    })
}

export async function down(): Promise<void> {}
