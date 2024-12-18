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
  title: 'Getting Started with Divi Builder - MitBridge Documentation',
  description:
    'Learn how to use the Divi Builder to create and edit pages in your WordPress site.'
}

export default function DiviGettingStarted() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Getting Started with Divi Builder
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to use the Divi Builder to create beautiful, responsive
          pages for your WordPress site.
        </p>
      </div>

      <Alert>
        <AlertTitle>Before you begin</AlertTitle>
        <AlertDescription>
          Make sure you have administrator access to your WordPress site and the
          Divi Builder is properly installed and activated.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Quick Start Guide</h2>

        <Card>
          <CardHeader>
            <CardTitle>Accessing the Divi Builder</CardTitle>
            <CardDescription>
              Learn how to access and enable the Divi Builder on your pages and
              posts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Log in to your WordPress admin dashboard</li>
              <li>Create a new page or edit an existing one</li>
              <li>
                Look for the &quot;Use Divi Builder&quot; button at the top of
                the content editor
              </li>
              <li>Click the button to enable the Divi Builder interface</li>
            </ol>
            <div className="mt-4 rounded-lg border bg-muted/50 p-4">
              <p className="text-sm text-muted-foreground">
                💡 Tip: You can also enable the Visual Builder by clicking the
                &quot;Enable Visual Builder&quot; button in the admin bar when
                viewing your page on the frontend.
              </p>
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="interface">
            <AccordionTrigger>Understanding the Interface</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The Divi Builder interface consists of several key elements:
              </p>
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Settings Menu</strong> - Access global settings and
                  page options
                </li>
                <li>
                  <strong>Module Library</strong> - Browse and add content
                  modules
                </li>
                <li>
                  <strong>Layout Options</strong> - Manage sections, rows, and
                  columns
                </li>
                <li>
                  <strong>Responsive Preview</strong> - Test your design across
                  devices
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sections">
            <AccordionTrigger>Working with Sections</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Sections are the largest structural elements in Divi:</p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Click the &quot;+&quot; button to add a new section</li>
                <li>Choose between regular and fullwidth sections</li>
                <li>Add rows within sections to create your layout</li>
                <li>
                  Customize section settings like background, padding, and more
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modules">
            <AccordionTrigger>Using Modules</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Modules are the building blocks of your content:</p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Text modules for content</li>
                <li>Image and gallery modules for media</li>
                <li>Button modules for calls-to-action</li>
                <li>Specialty modules for specific features</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue your learning journey with these resources.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/building-pages">
                  Learn how to build pages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/modules">
                  Explore Divi modules
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/theme-options">
                  Configure theme options
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
