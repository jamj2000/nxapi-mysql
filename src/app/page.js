import Link from "next/link";


export default async function Home() {


  return (
    <main>

      <Link href='/api/testdb'>Test DB connection</Link>
      <Link href='/api/articulos'>Lista de todos los artículos</Link>
      <h1>API (endpoints disponibles)</h1>
      <details>
        <summary>GET /api/articulos</summary>
        Obtener todos los artículos.
      </details>
      <details>
        <summary>POST /api/articulos</summary>
        Crear nuevo artículo.
      </details>
      <details>
        <summary>GET /api/articulos/[id]</summary>
        Obtener artículo por ID.
      </details>
      <details>
        <summary>DELETE /api/articulos/[id]</summary>
        Eliminar artículo por ID.
      </details>
      <details>
        <summary>PUT /api/articulos/[id]</summary>
        Modificar artículo por ID.
      </details>

    </main>
  )
}
