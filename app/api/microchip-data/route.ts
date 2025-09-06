import { type NextRequest } from 'next/server';
import microchipData from '@/data/microchip-data.json';
import { validateAndSanitizeData } from '@/utils';
import { MicrochipData } from '@/types';

export async function GET(req: NextRequest) {
  try {
    // Validate and sanitize the data
    const validatedData: MicrochipData = validateAndSanitizeData(microchipData);
    
    // Set cache control headers for better performance
    const headers = {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'Content-Type': 'application/json'
    };
    
    return new Response(JSON.stringify(validatedData), {
      status: 200,
      headers
    });
  } catch (error) {
    console.error('Error in microchip data API:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
