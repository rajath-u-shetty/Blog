import Link from "next/link";

export default function Chess() {
    return (
        <main className="text-white w-400px">
        <div>
            <div className="flex flex-col ml-12 ">
                <h1 className="text-5xl  mt-10 mb-10">Chess</h1>
                <p className="mb-6 text-gray-200">
                    Chess is a board game for two players, called White and Black, each controlling an army of chess pieces, with the objective to checkmate the opponent's king. It is sometimes called international chess or Western chess to distinguish it from related games such as xiangqi (Chinese chess) and shogi (Japanese chess). The recorded history of chess goes back at least to the emergence of a similar game, chaturanga, in seventh century India. The rules of chess as they are known today emerged in Europe at the end of the 15th century, with standardization and universal acceptance by the end of the 19th century. Today, chess is one of the world's most popular games played by millions of people worldwide.
                    </p>
                    <p className="text-gray-200">
                    Chess is an abstract strategy game that involves no hidden information and no elements of chance. It is played on a chessboard with 64 squares arranged in an 8×8 grid. At the start, each player controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. White moves first, followed by Black. The game is won by checkmating the opponent's king, i.e. threatening it with inescapable capture. There are also several ways a game can end in a draw.
                </p>
                <h3 className="text-bold text-3xl my-6">Rules</h3>
                <p className="text-gray-200">
                    The rules of chess are published by FIDE (Fédération Internationale des Échecs; "International Chess Federation"), chess's world governing body, in its Handbook.[2] Rules published by national governing bodies, or by unaffiliated chess organizations, commercial publishers, etc., may differ in some details. FIDE's rules were most recently revised in 2023
                    <Link href={"https://en.wikipedia.org/wiki/Rules_of_chess"}><h3 className="text-blue-700 underline text-bold mt-2">official Rules</h3></Link>
                </p>
                <h3 className="text-bold text-3xl my-6">Famous Players</h3>
                <div className="bg-slate-800 border-md flex flex-col items-center w-96 gap-5 underline p-10 mb-10">
                    <Link href={"https://en.wikipedia.org/wiki/Magnus_Carlsen"}><h2 className="text-bold text-xl">Magnus Carlsen</h2></Link>
                    <Link href={"https://en.wikipedia.org/wiki/Garry_Kasparov"}><h2 className="text-bold text-xl">Garry Kasparov</h2></Link>
                    <Link href={"https://en.wikipedia.org/wiki/Hikaru_Nakamura"}><h2 className="text-bold text-xl">Hikaru Nakamura</h2></Link>
                    <Link href={"https://en.wikipedia.org/wiki/Anish_Giri"}><h2 className="text-bold text-xl">Anish Giri</h2></Link>
                    <Link href={"https://en.wikipedia.org/wiki/List_of_chess_players_by_peak_FIDE_rating"}><h2 className="text-bold text-xl">....More</h2></Link>
                </div>
            </div>
        </div>
        </main>
    )
}
