import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'WordPress Content Management - MitBridge Documentation',
  description:
    'Learn how to create and manage pages and posts in WordPress using both the block editor and Divi Builder.'
}

export default function WordPressContent() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Managing WordPress Content</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create, edit, and organize your WordPress pages and posts
          effectively.
        </p>
      </div>

      <Alert>
        <AlertTitle>Content Types</AlertTitle>
        <AlertDescription>
          WordPress has two main content types: Pages (static content) and Posts
          (blog/news content). Both can be created using either the WordPress
          Block Editor or Divi Builder.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Creating New Content</CardTitle>
            <CardDescription>
              Steps to create new pages or posts in WordPress.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Navigate to your WordPress dashboard</li>
              <li>
                Click &quot;Pages&quot; or &quot;Posts&quot; in the sidebar
              </li>
              <li>Click the &quot;Add New&quot; button</li>
              <li>Choose between Block Editor or Divi Builder</li>
              <li>Add your content and publish when ready</li>
            </ol>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="block-editor">
            <AccordionTrigger>Using the Block Editor</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>The WordPress Block Editor (Gutenberg) offers:</p>
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Blocks:</strong> Add paragraphs, headings, images, and
                  more
                </li>
                <li>
                  <strong>Patterns:</strong> Pre-designed block layouts
                </li>
                <li>
                  <strong>Reusable Blocks:</strong> Save and reuse content
                  across pages
                </li>
                <li>
                  <strong>Block Groups:</strong> Organize blocks together
                </li>
                <li>
                  <strong>Quick Settings:</strong> Format text and adjust block
                  settings
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="organization">
            <AccordionTrigger>Content Organization</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Categories:</strong> Broad grouping of posts
                </li>
                <li>
                  <strong>Tags:</strong> Specific topic identifiers
                </li>
                <li>
                  <strong>Parent Pages:</strong> Create page hierarchies
                </li>
                <li>
                  <strong>Menu Structure:</strong> Organize navigation
                </li>
                <li>
                  <strong>Featured Images:</strong> Set post/page thumbnails
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="settings">
            <AccordionTrigger>Content Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Status:</strong> Draft, Published, Private, or
                  Scheduled
                </li>
                <li>
                  <strong>Visibility:</strong> Public, Password Protected, or
                  Private
                </li>
                <li>
                  <strong>Permalink:</strong> Customize the URL structure
                </li>
                <li>
                  <strong>Discussion:</strong> Enable/disable comments
                </li>
                <li>
                  <strong>Author:</strong> Assign content to specific users
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Managing Media</CardTitle>
            <CardDescription>
              Handle images and other media files effectively.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Media Library:</strong> Central location for all uploads
              </li>
              <li>
                <strong>Image Optimization:</strong> Compress images before
                upload
              </li>
              <li>
                <strong>Alt Text:</strong> Add descriptive text for
                accessibility
              </li>
              <li>
                <strong>Galleries:</strong> Create image collections
              </li>
              <li>
                <strong>File Organization:</strong> Use folders to organize
                media
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Tips for effective content management.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>Use clear, descriptive titles for better SEO</li>
              <li>Organize content with categories and tags</li>
              <li>Optimize images before uploading</li>
              <li>Preview content before publishing</li>
              <li>Regularly update and review published content</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue learning about WordPress management.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/users">
                  User Management
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/media">
                  Media Library
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
