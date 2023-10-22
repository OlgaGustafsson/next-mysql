import Link from "@/node_modules/next/link";

export default function Navbar() {
    return(
        <div>
            
            <ul className="list-none flex gap-2">

                <li>
                  <Link href="/">Hem</Link>
                </li> 

                <li>
                <Link href="/documents">Dokument</Link>
                </li>

                <li>
                    <Link href="/create">Skapa nytt</Link>
                </li>
              
            </ul>
        </div>
    );
}