import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = req.query.secret as string | undefined;

  if (secret !== process.env.UNIFORM_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Secret was not provided or it does not match' });
  }

  let path = (req.query.path as string) || (req.body?.slug as string | undefined);

  if (!path || typeof path !== 'string') {
    return res.status(401).json({ message: 'Path not provided' });
  }

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  try {
    console.log('Revalidating path: ' + path);
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.error({ err });
    return res.status(500).send('Error revalidating!');
  }
}
