export const DefaultLayout = ({ scripts = [], styles = [], packages = [], ...props }: IndexProps) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>{props.title}</title>
            <link rel="icon" href="./favicon.ico" type="image/x-icon" />
            <script type="importmap">
                {
                    packages.length > 0
                        ? JSON.stringify({
                            imports: Object.fromEntries(
                                packages.map((x) => [x, `/packages/${x}`])
                            )
                        })
                        : null
                }
            </script>
            {
                styles.map(style =>
                    <link rel="stylesheet" href={`/styles/${style}`} type="text/css" />
                )
            }
            {
                packages.map(pkg =>
                    <link rel="modulepreload" href={`/packages/${pkg}`} />
                )
            }
            {
                scripts.map(script =>
                    <script type="module" src={`/scripts/${script}`}></script>
                )
            }
        </head>
        <body>
            <main>
                {props.children}
            </main>
        </body>
    </html>
)

export type IndexProps = Html.PropsWithChildren<{
    title: string;
    scripts?: Array<string>;
    packages?: Array<string>;
    styles?: Array<string>;
}>;