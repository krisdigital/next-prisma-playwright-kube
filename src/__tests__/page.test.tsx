import { expect, test, vi, beforeEach, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

import prisma from '../lib/client'

describe('Page', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scroll = vi.fn()
  })

  test('is showing up', async () => {
    render(await Page())

    expect(screen.getByRole('button', { name: 'Neu' })).toBeDefined()
  })

  test('is loading posts', async () => {
    const user = await prisma.user.create({ data: { email: 'test@test.com', name: 'Klaus' } });

    const title = 'Moin';
    const content = 'Content';
    await prisma.post.create({ data: { title, content, authorId: user.id } });

    render(await Page())

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})