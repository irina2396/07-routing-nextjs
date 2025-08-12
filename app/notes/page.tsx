import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', { page: 1, perPage: 12, search: '' }],
    queryFn: () => fetchNotes({ page: 1, perPage: 12 }),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <NotesClient />
    </HydrationBoundary>
  );
}
