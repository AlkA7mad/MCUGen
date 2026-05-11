
interface Board {
    id: string;
    name: string;
    mcu: string;
    package: string;
}

export async function getBoards(): Promise<Board[]> {
    
    const response = await fetch("http://localhost:5131/boards");

    if (response.status >= 500) {
        throw new Error(`Server error: ${response.status}`);
    }

    const data: Board[] = await response.json();
    
    return data;
}