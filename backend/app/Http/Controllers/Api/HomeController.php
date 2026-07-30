<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'topSelling' => [
                [
                    'id' => 'prod-01',
                    'name' => 'Premium Wireless Headphones',
                    'brand' => 'SoundPro',
                    'price' => '$189',
                    'rating' => 4.9,
                    'reviewCount' => 1345,
                    'image' => 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
                ],
                [
                    'id' => 'prod-02',
                    'name' => 'Ultra Slim Smartwatch',
                    'brand' => 'ChronoX',
                    'price' => '$259',
                    'rating' => 4.8,
                    'reviewCount' => 786,
                    'image' => 'https://images.unsplash.com/photo-1519377391711-72a1a5c8a3dc?auto=format&fit=crop&w=600&q=80'
                ]
            ],
            'topSaveToday' => [
                [
                    'id' => 'prod-03',
                    'name' => 'Everyday Backpack',
                    'brand' => 'MileStays',
                    'price' => '$89',
                    'rating' => 4.7,
                    'reviewCount' => 412,
                    'image' => 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'
                ],
                [
                    'id' => 'prod-04',
                    'name' => 'Daily Essentials Watch',
                    'brand' => 'ChronoX',
                    'price' => '$149',
                    'rating' => 4.5,
                    'reviewCount' => 218,
                    'image' => 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80'
                ]
            ]
        ]);
    }
}
