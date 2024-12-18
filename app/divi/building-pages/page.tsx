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
  title: 'Building Pages with Divi - MitBridge Documentation',
  description:
    'Learn how to create and customize pages using the Divi Builder interface.'
}

export default function DiviBuildingPages() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Building Pages with Divi</h1>
        <p className="text-lg text-muted-foreground">
          Master the art of creating beautiful, responsive pages using Divi
          Builder&apos;s powerful features.
        </p>
      </div>

      <Alert>
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          Always save your work regularly and preview your changes before
          publishing. Divi Builder provides auto-save functionality, but
          it&apos;s good practice to manually save important changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Page Structure Basics</CardTitle>
            <CardDescription>
              Understanding the fundamental building blocks of a Divi page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Sections:</strong> The largest containers that span the
                full width of your content area
              </li>
              <li>
                <strong>Rows:</strong> Horizontal divisions within sections that
                can contain multiple columns
              </li>
              <li>
                <strong>Columns:</strong> Vertical divisions within rows where
                you place your modules
              </li>
              <li>
                <strong>Modules:</strong> Individual content elements like text,
                images, or buttons
              </li>
            </ul>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="layout">
            <AccordionTrigger>Creating Your Layout</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Follow these steps to build your page layout:</p>
              <ol className="list-decimal space-y-2 pl-4">
                <li>Click the &quot;+&quot; button to add a new section</li>
                <li>Choose your preferred column structure for the row</li>
                <li>
                  Add modules to your columns by clicking the &quot;+&quot; icon
                </li>
                <li>Customize each element using the settings panel</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="styling">
            <AccordionTrigger>Styling Your Page</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Divi offers extensive styling options:</p>
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Design Tab:</strong> Control spacing, colors, and
                  typography
                </li>
                <li>
                  <strong>Advanced Tab:</strong> Add custom CSS and responsive
                  design settings
                </li>
                <li>
                  <strong>Background:</strong> Set images, videos, or gradients
                </li>
                <li>
                  <strong>Hover Effects:</strong> Add interactive elements to
                  your design
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="responsive">
            <AccordionTrigger>Responsive Design</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>Ensure your page looks great on all devices:</p>
              <ul className="list-disc space-y-2 pl-4">
                <li>Use the responsive preview modes to test your layout</li>
                <li>Adjust spacing and sizing for different screen sizes</li>
                <li>Hide/show elements based on device type</li>
                <li>Set different styles for desktop, tablet, and mobile</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Follow these guidelines for optimal results.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>Start with a clear page structure before adding content</li>
              <li>Use consistent spacing and styling throughout your page</li>
              <li>Test your page across different devices</li>
              <li>Optimize images for web use</li>
              <li>Save your favorite sections as global elements for reuse</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue learning about Divi&apos;s features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/modules">
                  Learn about Divi modules
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/theme-options">
                  Explore theme options
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
