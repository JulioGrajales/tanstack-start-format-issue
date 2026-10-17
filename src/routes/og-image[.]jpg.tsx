import { createFileRoute } from '@tanstack/react-router';
import ImageResponse from 'takumi-js/response';

export const Route = createFileRoute('/og-image.jpg')({
  server: {
    handlers: {
      async GET() {
        const title = 'Hello';
        const description = 'Tanstack Start';

        return new ImageResponse(
          (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '64px',
                backgroundImage:
                  'linear-gradient(to bottom right, #eff6ff, #dbeafe)',
              }}
            >
              <p style={{ fontSize: 72, fontWeight: 700, color: '#111827' }}>
                {title}
              </p>
              <p style={{ fontSize: 42, fontWeight: 500, color: '#4b5563' }}>
                {description}
              </p>
            </div>
          ),
          {
            width: 1200,
            height: 630,
            format: 'jpeg',
          }
        );
      },
    },
  },
});
