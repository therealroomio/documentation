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
  title: 'WordPress Media Library - MitBridge Documentation',
  description: 'Learn how to manage and organize media files in WordPress.'
}

export default function WordPressMedia() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Media Library Management</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to effectively manage and organize your media files in
          WordPress.
        </p>
      </div>

      <Alert>
        <AlertTitle>Optimization Tip</AlertTitle>
        <AlertDescription>
          Always optimize your images before uploading to improve site
          performance. Use appropriate file formats: JPG for photos, PNG for
          graphics with transparency, and WebP for best compression.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Accessing the Media Library</CardTitle>
            <CardDescription>
              How to find and use the WordPress Media Library.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Click &quot;Media&quot; in the WordPress dashboard</li>
              <li>Choose between Grid and List views</li>
              <li>Use filters to find specific media types</li>
              <li>Search by filename or alt text</li>
              <li>Sort by date, name, or other attributes</li>
            </ol>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="uploading">
            <AccordionTrigger>Uploading Media</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Direct Upload:</strong> Drag and drop files
                </li>
                <li>
                  <strong>Media Library:</strong> Use the Add New button
                </li>
                <li>
                  <strong>Post Editor:</strong> Upload while editing content
                </li>
                <li>
                  <strong>Bulk Upload:</strong> Multiple files at once
                </li>
                <li>
                  <strong>File Size Limits:</strong> Check server restrictions
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="organizing">
            <AccordionTrigger>Organizing Media</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Folders:</strong> Create logical file structure
                </li>
                <li>
                  <strong>Categories:</strong> Group similar media
                </li>
                <li>
                  <strong>Tags:</strong> Add descriptive keywords
                </li>
                <li>
                  <strong>Bulk Select:</strong> Organize multiple files
                </li>
                <li>
                  <strong>Custom Order:</strong> Arrange gallery items
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="editing">
            <AccordionTrigger>Editing Media</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Basic Edits:</strong> Crop, rotate, and scale
                </li>
                <li>
                  <strong>Alt Text:</strong> Add accessibility descriptions
                </li>
                <li>
                  <strong>Captions:</strong> Add descriptive text
                </li>
                <li>
                  <strong>Titles:</strong> Rename for better organization
                </li>
                <li>
                  <strong>Metadata:</strong> Edit file information
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Image Optimization</CardTitle>
            <CardDescription>
              Best practices for managing image files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>File Size:</strong> Compress images before upload
              </li>
              <li>
                <strong>Dimensions:</strong> Use appropriate image sizes
              </li>
              <li>
                <strong>Format:</strong> Choose the right file type
              </li>
              <li>
                <strong>Lazy Loading:</strong> Enable for better performance
              </li>
              <li>
                <strong>WebP:</strong> Use modern image formats
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Issues</CardTitle>
            <CardDescription>
              Troubleshooting media-related problems.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Upload Errors:</strong> File size and permission issues
              </li>
              <li>
                <strong>Missing Images:</strong> Broken media links
              </li>
              <li>
                <strong>Regenerate Thumbnails:</strong> Fix image sizes
              </li>
              <li>
                <strong>Storage Space:</strong> Manage disk usage
              </li>
              <li>
                <strong>Performance:</strong> Optimize large libraries
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue exploring WordPress and WooCommerce features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/setup">
                  WooCommerce Setup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/products">
                  Product Management
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
