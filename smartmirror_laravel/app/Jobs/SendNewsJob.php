<?php

namespace App\Jobs;

use App\Events\Message;
use App\MirrorConfig;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Feeds;

class SendNewsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $rss;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        $config = MirrorConfig::where('name', 'news')->first();
        $this->rss = $config->data['rss'];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $feed = Feeds::make($this->rss, 5, true); // if RSS Feed has invalid mime types, force to read
        $data = array(
            'title' => $feed->get_title(),
            'permalink' => $feed->get_permalink(),
            'items' => $feed->get_items(),
        );
        foreach ($data['items'] as $key => $item) {
            $title = preg_replace('/\s+/S', " ", $item->get_title());
            $description = ltrim(preg_replace('/\s+/S', " ", strip_tags($item->get_description())));
            $content = preg_replace('/\s+/S', " ", $item->get_content());
            $data['prepared_items'][] =
                [
                    "date" => $item->get_date('Y-m-d H:i:s'),
                    "id" => $item->get_id(),
                    "title" => $title,
                    "description" => $description,
                    "content" => $content,
                ];
            if ($key > 5) {
                break;
            }
        }
        $data['items'] = $data['prepared_items'];
        unset($data['prepared_items']);
        broadcast(new Message('news', $data));
    }
}
