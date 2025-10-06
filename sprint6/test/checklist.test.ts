import{ test, expect } from '@playwright/test';

test('Checklist page shows title', async ({page}) =>
{
    await page.goto('/lab/checklist.svelte');
    
    const title = await page.getByTestId('title');
    await expect(title).toHaveText('Progress Checklist');
});