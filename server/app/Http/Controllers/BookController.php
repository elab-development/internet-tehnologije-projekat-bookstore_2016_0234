<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all(); // You can modify this query based on your needs
        return response()->json(['books' => $books]);
    }
    public function getByGenre($genre_id){
        $books=Book::get()->where('genre_id',$genre_id);

        if(count($books)==0){
            return response()->json('Book with this genre does not exist!');
        }

        $my_books=array();
        foreach($books as $book){
            array_push($my_books,new BookResource($book));
        }

        return $my_books;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json(['message' => 'Show create form']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'releaseYear' => 'required|integer',
            'description' => 'required|string',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'genre_id' => 'required|exists:genres,id',
            'page_count' => 'required|integer',
            'price' => 'required|numeric',
            'available' => 'required|boolean',
        ]);

        $book = Book::create([
            'name' => $request->input('name'),
            'author' => $request->input('author'),
            'releaseYear' => $request->input('releaseYear'),
            'description' => $request->input('description'),
            'cover_image' => $coverImage,
            'genre_id' => $request->input('genre_id'),
            'page_count' => $request->input('page_count'),
            'price' => $request->input('price'),
            'available' => $request->input('available'),
        ]);

        return response()->json(['message' => 'Book created successfully', 'book' => $book], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        $book = Book::findOrFail($id);
        return response()->json(['book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(['message' => 'Book deleted successfully']);
    }
}
