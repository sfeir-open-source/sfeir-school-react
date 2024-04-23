import MuiAlert from '@mui/material/Alert';
import { useQuery } from '@tanstack/react-query';
import { useAppConfig } from '../config';

export function Messages() {
  const message = useMessage();
  return (
    <MuiAlert severity={message?.type ?? 'info'} variant="outlined">
      {message?.text}
    </MuiAlert>
  );
}

function useMessage() {
  const { config } = useAppConfig();
  const { data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => fetch(`${config.apiBaseUrl}/messages`).then((res): Promise<Message[]> => res.json()),
    refetchInterval: 10_000,
  });
  return data?.[0];
}
