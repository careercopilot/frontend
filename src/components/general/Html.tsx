import Head from "next/head";

// Most basic html component – in real app you will need something more complex
export function Html({
  children,
  styles,
}: {
  children: string;
  styles: string;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* We will inject extracted styles here */}
        {styles}
      </Head>

      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      </body>
    </html>
  );
}
